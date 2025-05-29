"use client";
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import {} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import BKImageUploader from "@/components/ui/core/BKImageUploader";
import ImagePreviewer from "@/components/ui/core/BKImageUploader/ImagePreviewer";
import { useState } from "react";
import { Plus } from "lucide-react";
import { createRentalHouse } from "@/services/RentalHouse";
import { useRouter } from "next/navigation";

export function CreateRentalHouseForm() {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      availableFrom: "",
      bathrooms: "",
      bedrooms: "",
      description: "",
      location: {
        address: "",
        city: "",
        country: "",
        state: "",
        zipCode: "",
      },
      rentAmount: "",
      title: "",
      amenities: [{ value: "" }],
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const { append, fields } = useFieldArray({
    control: form.control,
    name: "amenities",
  });
  const addAmenities = () => {
    append({ value: "" });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const amenities = data?.amenities?.map(
      (aminity: { value: string }) => aminity.value
    );
    const updatedData = {
      ...data,
      amenities,
      bedrooms: Number(data?.bedrooms),
      bathrooms: Number(data?.bathrooms),
      rentAmount: parseFloat(data?.rentAmount),
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(updatedData));
    for (const image of imageFiles) {
      formData.append("images", image);
    }

    try {
      const res = await createRentalHouse(formData);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/landlord/rental-houses");
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-2 border-primary rounded-2xl flex-grow max-w-2xl p-5 mx-auto">
      <div className="flex items-center space-x-4 mb-5 ">
        <h1 className="text-2xl font-bold text-center w-full">
          Add Rental House
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex justify-between items-center border-t border-b py-3 my-5">
            <p className="text-primary font-bold text-xl">Basic Information</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Title</FormLabel>
                  <FormControl>
                    <Input
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
              name="rentAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Rent Amount</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      type="number"
                      className="rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Bedrooms</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      type="number"
                      className="rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bathrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Bathrooms</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      type="number"
                      className="rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="availableFrom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Available From</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      type="date"
                      className="rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between items-center border-t border-b py-3 my-5">
            <p className="text-primary font-bold text-xl">Address</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="location.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Address</FormLabel>
                  <FormControl>
                    <Input
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
              name="location.state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">State</FormLabel>
                  <FormControl>
                    <Input
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
              name="location.city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">City</FormLabel>
                  <FormControl>
                    <Input
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
              name="location.zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Zip Code</FormLabel>
                  <FormControl>
                    <Input
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
              name="location.country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Country</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      type="text"
                      className="rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-5">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      value={field.value || ""}
                      className="h-36 resize-none  rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between items-center border-t border-b py-3 my-5">
            <p className="text-primary font-bold text-xl">Amenities</p>
            <Button
              variant="outline"
              className="size-10 cursor-pointer rounded-2xl hover:bg-white border-dashed"
              onClick={addAmenities}
              type="button">
              <Plus className="text-primary" />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {fields.map((field, idx) => (
              <div key={field?.id}>
                <FormField
                  control={form.control}
                  name={`amenities.${idx}.value`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">
                        Amenity {idx + 1}{" "}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          className="rounded-2xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t border-b py-3 my-5">
            <p className="text-primary font-bold text-xl">Images</p>
          </div>
          <div className="flex gap-4 ">
            {imagePreview.length < 4 ? (
              <>
                <BKImageUploader
                  setImagePreview={setImagePreview}
                  setImageFiles={setImageFiles}
                  label="Upload Images"
                  className="w-fit mt-0"
                />
                <ImagePreviewer
                  className="flex flex-wrap gap-4"
                  imagePreview={imagePreview}
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                />
              </>
            ) : (
              <ImagePreviewer
                className="flex flex-wrap gap-4"
                imagePreview={imagePreview}
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
              />
            )}
          </div>

          <Button type="submit" className="w-full rounded-2xl cursor-pointer">
            {isSubmitting ? "Adding" : "Add Rental House"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
