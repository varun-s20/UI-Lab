import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  componentName: string;
}

const componentData = {
  buttons: {
    title: "Button",
    category: "Core",
    description: "Versatile button component with variants and sizes.",
    preview: (
      <div className="flex items-center gap-4 p-8">
        <Button variant="default">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline" disabled>Loading</Button>
      </div>
    ),
    installation: `# install package
npm i ui-lab`,
    usage: `import { Button } from "ui-lab"

export default function Demo() {
  return <Button variant="primary">Save</Button>
}`
  },
  forms: {
    title: "Form Preview",
    category: "Layout",
    description: "Example login form with validation-ready fields.",
    preview: (
      <div className="max-w-sm mx-auto p-8 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input 
            type="email" 
            placeholder="name@company.com"
            className="w-full px-3 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <p className="text-xs text-muted-foreground">We will never share your email.</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full px-3 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <p className="text-xs text-muted-foreground">8+ characters, 1 number</p>
        </div>
        <div className="flex gap-3 pt-4">
          <Button className="flex-1">Submit</Button>
          <Button variant="secondary">Reset</Button>
        </div>
      </div>
    ),
    installation: `# install form package
npm i @ui-lab/forms`,
    usage: `import { Form, Field, Submit } from "@ui-lab/forms"

export default function Login() {
  return (
    <Form>
      <Field name="email" />
      <Field name="password" type="password" />
      <Submit>Sign in</Submit>
    </Form>
  )
}`
  }
};

export function ComponentPreview({ componentName }: ComponentPreviewProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("preview");

  const component = componentData[componentName as keyof typeof componentData];
  
  if (!component) {
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
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold">{component.title}</h1>
            <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
              {component.category}
            </span>
            <span className="text-xs text-muted-foreground">v0.1.2</span>
          </div>
          <p className="text-muted-foreground">{component.description}</p>
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
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg">
              {component.preview}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Installation</h3>
                <div className="relative bg-code-bg border border-border rounded-lg p-4">
                  <button
                    onClick={() => copyToClipboard(component.installation, "install")}
                    className="absolute top-3 right-3 p-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copiedCode === "install" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <pre className="text-sm font-mono">
                    <code className="text-syntax-comment"># install package</code>
                    {'\n'}
                    <code className="text-syntax-keyword">npm</code>{' '}
                    <code className="text-syntax-attribute">i</code>{' '}
                    <code className="text-syntax-string">ui-lab</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Usage</h3>
                <div className="relative bg-code-bg border border-border rounded-lg p-4">
                  <button
                    onClick={() => copyToClipboard(component.usage, "usage")}
                    className="absolute top-3 right-3 p-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copiedCode === "usage" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <pre className="text-sm font-mono text-foreground">
                    <code className="text-syntax-keyword">import</code>
                    <code className="text-foreground"> {`{`} </code>
                    <code className="text-syntax-tag">Button</code>
                    <code className="text-foreground"> {`}`} </code>
                    <code className="text-syntax-keyword">from</code>
                    <code className="text-foreground"> </code>
                    <code className="text-syntax-string">ui-lab</code>
                    {'\n\n'}
                    <code className="text-syntax-keyword">export default</code>
                    <code className="text-foreground"> </code>
                    <code className="text-syntax-keyword">function</code>
                    <code className="text-foreground"> </code>
                    <code className="text-syntax-tag">Demo</code>
                    <code className="text-foreground">() {`{`}</code>
                    {'\n  '}
                    <code className="text-syntax-keyword">return</code>
                    <code className="text-foreground"> </code>
                    <code className="text-syntax-tag">&lt;Button</code>
                    <code className="text-foreground"> </code>
                    <code className="text-syntax-attribute">variant</code>
                    <code className="text-foreground">=</code>
                    <code className="text-syntax-string">primary</code>
                    <code className="text-syntax-tag">&gt;</code>
                    <code className="text-foreground">Save</code>
                    <code className="text-syntax-tag">&lt;/Button&gt;</code>
                    {'\n'}
                    <code className="text-foreground">{`}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}