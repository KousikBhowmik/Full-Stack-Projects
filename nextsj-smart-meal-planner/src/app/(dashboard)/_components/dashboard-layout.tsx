"use client";
import { Button } from "@/components/ui/button";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Menu } from "lucide-react";
import { ReactNode, useState } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger asChild>
          <Button size="icon" variant="outline">
            <Menu />
          </Button>
        </Collapsible.Trigger>
      </Collapsible.Root>

      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Content>content</Collapsible.Content>
      </Collapsible.Root>

      {children}
    </div>
  );
};

export default DashboardLayout;
