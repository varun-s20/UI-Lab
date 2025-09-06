import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { componentData, ComponentDoc } from "@/data/componentData";
import { loadComponentFiles } from "@/data/fileLoader";

interface ComponentPreviewProps {
  componentName: string;
}

export function ComponentPreview({ componentName }: ComponentPreviewProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("preview");
  const [installTab, setInstallTab] = useState<string>("dependencies");
  const [expandedFiles, setExpandedFiles] = useState<Record<string, boolean>>(
    {}
  );

  const component = componentData[componentName as keyof typeof componentData];
  const [loadedComponent, setLoadedComponent] = useState<ComponentDoc | null>(
    component ?? null
  );

  useEffect(() => {
    if (!component) return;
    // Optimistically show the new component immediately to avoid flicker
    setLoadedComponent(component);
    // Hydrate code files asynchronously if provided
    if (component.codeFiles) {
      loadComponentFiles(component.codeFiles).then((loadedFiles) => {
        setLoadedComponent({
          ...component,
          codeFiles: loadedFiles,
        });
      });
    }
  }, [component]);

  if (!component || !loadedComponent) {
    return (
      <div className="flex-1 flex items-center justify-center text-muted-foreground">
        <p>Select a component to view its preview</p>
      </div>
    );
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <main className="flex-1 overflow-auto">
      <div className="p-4 sm:p-6">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
            <h1 className="text-xl sm:text-2xl font-bold">
              {loadedComponent.title}
            </h1>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                {loadedComponent.category}
              </span>
              <span className="text-xs text-muted-foreground">v0.1.2</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base">
            {loadedComponent.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-border mb-6">
          {["preview", "code"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 text-sm font-medium capitalize rounded-t-md transition-colors",
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "preview" && (
          <div className="bg-card border border-border rounded-lg min-h-96">
            {loadedComponent.preview}
          </div>
        )}

        {activeTab === "code" && (
          <div className="space-y-10">
            {/* Installation with tabs and timeline */}
            {Array.isArray(loadedComponent.installTabs) ? (
              <section>
                <h3 className="text-lg font-semibold mb-4">Installation</h3>
                <div className="inline-flex items-center gap-1 border border-border rounded-md overflow-hidden mb-4">
                  {loadedComponent.installTabs?.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setInstallTab(t.id as string)}
                      className={cn(
                        "px-3 py-1.5 text-sm",
                        installTab === t.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Install steps */}
                <div className="space-y-4">
                  {loadedComponent.installTabs
                    ?.find((t) => t.id === installTab)
                    ?.steps?.map((step, i) => (
                      <div
                        key={i}
                        className="border border-border rounded-lg p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                            {i + 1}
                          </div>
                          <div className="flex-1 space-y-2">
                            <h4 className="font-medium">{step.title}</h4>
                            {step.description && (
                              <p className="text-sm text-muted-foreground">
                                {step.description}
                              </p>
                            )}
                            {step.code && (
                              <div className="relative">
                                <pre className="bg-muted p-3 rounded text-sm font-mono overflow-x-auto">
                                  {step.code}
                                </pre>
                                <button
                                  onClick={() =>
                                    copyToClipboard(step.code!, `step-${i}`)
                                  }
                                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                                >
                                  {copiedCode === `step-${i}` ? (
                                    <Check className="w-4 h-4" />
                                  ) : (
                                    <Copy className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                            )}
                            {step.filePath && (
                              <div className="text-xs text-muted-foreground font-mono">
                                📁 {step.filePath}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            ) : null}

            {/* Code files */}
            {Array.isArray(loadedComponent.codeFiles) ? (
              <section className="space-y-6">
                <h3 className="text-lg font-semibold">Usage</h3>
                {loadedComponent.codeFiles?.map((file) => {
                  const isExpanded =
                    expandedFiles[file.path] ?? !file.collapsed;
                  const content = file.content as string;
                  const preview = file.collapsed
                    ? content.split("\n").slice(0, 10).join("\n")
                    : content;
                  return (
                    <div
                      key={file.path}
                      className="border border-border rounded-lg overflow-hidden"
                    >
                      <div className="flex items-center justify-between px-3 py-2 text-xs bg-muted/60 border-b border-border">
                        <span className="font-mono">{file.path}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              copyToClipboard(content, `file-${file.path}`)
                            }
                            className="text-muted-foreground hover:text-foreground"
                          >
                            {copiedCode === `file-${file.path}` ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                          {file.collapsed && (
                            <button
                              onClick={() =>
                                setExpandedFiles((s) => ({
                                  ...s,
                                  [file.path]: !isExpanded,
                                }))
                              }
                              className="text-xs text-white bg-black/50 hover:bg-black/70 px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors border border-primary"
                            >
                              {isExpanded ? "Collapse" : "Expand"}
                            </button>
                          )}
                        </div>
                      </div>
                      <pre className="p-4 text-sm font-mono whitespace-pre-wrap break-words bg-code-bg">
                        {isExpanded ? content : preview}
                      </pre>
                    </div>
                  );
                })}
              </section>
            ) : null}

            {/* Props tables */}
            {Array.isArray(loadedComponent.props) ? (
              <section className="space-y-6">
                <h3 className="text-lg font-semibold">Props</h3>
                {loadedComponent.props?.map((tbl) => (
                  <div key={tbl.title} className="space-y-3">
                    <h4 className="text-sm font-medium">{tbl.title}</h4>
                    <div className="overflow-x-auto border border-border rounded-lg">
                      <table className="w-full text-sm">
                        <thead className="bg-muted/60">
                          <tr className="text-left">
                            <th className="px-4 py-2 font-semibold">Prop</th>
                            <th className="px-4 py-2 font-semibold">Type</th>
                            <th className="px-4 py-2 font-semibold">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {tbl.rows.map((r, i) => (
                            <tr key={i} className="border-t border-border/60">
                              <td className="px-4 py-2 font-medium">
                                {r.prop}
                              </td>
                              <td className="px-4 py-2">
                                <code className="px-1 rounded bg-muted/50 font-mono">
                                  {r.type}
                                </code>
                              </td>
                              <td className="px-4 py-2 text-muted-foreground">
                                {r.description}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </section>
            ) : null}
          </div>
        )}
      </div>
    </main>
  );
}
