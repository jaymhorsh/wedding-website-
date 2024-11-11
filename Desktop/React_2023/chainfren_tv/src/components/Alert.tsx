import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

// Update props type definition to include onConfirm
type AlertDialogDemoProps = {
  title: string;
  description: string;
  cancelLabel?: string;
  confirmLabel?: string;
  onConfirm: () => void; // Function to be triggered on confirm
  children: React.ReactNode;
};

export const AlertDialogs: React.FC<AlertDialogDemoProps> = ({
  title,
  description,
  cancelLabel = "Cancel",
  confirmLabel = "Yes, delete Stream",
  onConfirm,
  children,
}) => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="fixed inset-0 bg-black-primary-text opacity-80 data-[state=open]:animate-overlayShow" />
      <AlertDialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
        <AlertDialog.Title className="m-0 text-[17px] font-medium text-mauve12">
          {title} {/* Use props for title */}
        </AlertDialog.Title>
        <AlertDialog.Description className="mb-5 mt-[15px] text-[15px] leading-normal text-mauve11">
          {description} {/* Use props for description */}
        </AlertDialog.Description>
        <div className="flex justify-end gap-[25px]">
          {/* <AlertDialog.Cancel asChild> */}
          <button className="inline-flex h-[35px] items-center justify-center rounded bg-mauve4 px-[15px] font-medium leading-none text-mauve11 outline-none hover:bg-mauve5 focus:shadow-[0_0_0_2px] focus:shadow-mauve7">
            {cancelLabel} {/* Use props for cancel button label */}
          </button>
          {/* </AlertDialog.Cancel>
          <AlertDialog.Action asChild> */}

          <button
            className="inline-flex h-[35px]  items-center justify-center rounded bg-red-100 px-[15px] font-medium leading-none text-red-600 outline-none hover:bg-red-200 focus:shadow-[0_0_0_2px] focus:shadow-red7"
            onClick={onConfirm} // Trigger the onConfirm function
          >
            {confirmLabel} {/* Use props for confirm button label */}
          </button>
          {/* </AlertDialog.Action> */}
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);
