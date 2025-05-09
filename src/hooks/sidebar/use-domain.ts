import { useToast } from "@/components/ui/use-toast";
import { AddDomainProps, AddDomainSchema } from "@/schemas/settings.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UploadClient } from "@uploadcare/upload-client";
import { onIntegrateDomain } from "@/actions/settings";

const upload = new UploadClient({
  publicKey: process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY as string,
});

export const useDomain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddDomainProps>({
    resolver: zodResolver(AddDomainSchema),
  });

  const pathname = usePathname();
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [isDomain, setIsDomain] = useState<string | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    setIsDomain(pathname.split("/").pop());
  }, [pathname]);

  const onAddDomain = handleSubmit(async (values: AddDomainProps) => {
    setLoading(true);
    const uploaded = await upload.uploadFile(values.image[0]);
    const domain = await onIntegrateDomain(values.domain, uploaded.uuid);
    if (domain) {
      reset();
      setLoading(false);
      toast({
        title: domain.status == 200 ? "Success" : "Error",
        description: domain.message,
      });

      router.refresh();
    }
  });

  return {
    register,
    onAddDomain,
    errors,
    loading,
    isDomain,
  };
};
