import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function PropsPanel() {
  return (
    <aside className="w-80 border-l border-border bg-background p-6">
      <div className="flex items-center gap-2 text-sm font-medium mb-6">
        <span>Props & Controls</span>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-muted-foreground">Variant</Label>
            <span className="text-sm font-mono">primary</span>
          </div>
          
          <div className="flex items-center justify-between">
            <Label className="text-sm text-muted-foreground">Disabled</Label>
            <Switch />
          </div>
          
          <div className="flex items-center justify-between">
            <Label className="text-sm text-muted-foreground">Size</Label>
            <span className="text-sm font-mono">md</span>
          </div>
          
          <div className="flex items-center justify-between">
            <Label className="text-sm text-muted-foreground">Icon</Label>
            <Switch />
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Notes</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Use lime green for primary actions and subtle borders for secondary buttons. 
            Inputs should show an accent border on focus.
          </p>
        </div>
      </div>
    </aside>
  );
}