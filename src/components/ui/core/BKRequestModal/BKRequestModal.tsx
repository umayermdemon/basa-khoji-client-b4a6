import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { createRentalRequest } from "@/services/RentalRequest";
import { getMe } from "@/services/User";
import { IRentalRequest } from "@/types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  moveInDate: z.string().min(1, "Move-in date is required"),
  rentalDuration: z.string().min(1, "Rental duration is required"),
  additionalMessage: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

const BKRequestModal = ({ listingId }: { listingId: string }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { data: dataMe } = await getMe();
    const rentalDuration = Number(data?.rentalDuration);
    const updatedData = {
      ...data,
      rentalDuration,
      tenantId: dataMe?._id,
      listingId,
    };
    try {
      const res = await createRentalRequest(updatedData as IRentalRequest);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/tenant/my-rentals");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    }
    console.log("Rental Request Submitted:", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer rounded-2xl">Request Rental</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-center text-2xl">
            Request For Rent
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="moveInDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Move-in Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      value={field.value || ""}
                      className="rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rentalDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rental Duration (Months)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value || ""}
                      className="rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalMessage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      value={field.value || ""}
                      className="rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="cursor-pointer"
                    />
                  </FormControl>
                  <FormLabel>I agree to the terms and conditions</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="submit"
                className="w-full rounded-2xl cursor-pointer">
                Request
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BKRequestModal;
