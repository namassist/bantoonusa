"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  company: z.string().min(2).max(50),
  email: z.string().email(),
  mobile_number: z
    .string()
    .refine((value) => /^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value)),
  website: z
    .string()
    .optional()
    .refine(
      (value) =>
        !value ||
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/[\w.-]*)*\/?$/.test(
          value
        ),
      {
        message: "Please provide a valid URL",
      }
    ),
  description: z.string().min(10).max(250),
  budget: z.string().min(10).max(250),
  deadline: z.string().min(1).max(250),
});

export const FormContact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      mobile_number: "",
      website: "",
      description: "",
      budget: "",
      deadline: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full lg:w-8/12 flex flex-col justify-center items-center gap-6 sm:flex-row sm:flex-wrap"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full sm:w-[calc(50%_-_0.75rem)]">
              <FormLabel className="label-large">Nama</FormLabel>
              <FormControl>
                <Input placeholder="Jhon Meyer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="w-full sm:w-[calc(50%_-_0.75rem)]">
              <FormLabel className="label-large">Perusahaan/Bisnis</FormLabel>
              <FormControl>
                <Input placeholder="PT. John Meyer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full sm:w-[calc(50%_-_0.75rem)]">
              <FormLabel className="label-large">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile_number"
          render={({ field }) => (
            <FormItem className="w-full sm:w-[calc(50%_-_0.75rem)]">
              <FormLabel className="label-large">No. HP / Kontak</FormLabel>
              <FormControl>
                <Input placeholder="+6281234567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Website (jika ada)</FormLabel>
              <FormControl>
                <Input placeholder="https://websitesaya.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full">
          <p className="heading-small text-center">
            Website seperti apa yang kamu rencanakan?
          </p>
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Penjelasan mengenai proyek</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Beri tahu kami mengenai proyek ini selengkap dan sejelas mungkin"
                  className="resize-none min-h-28"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem className="w-full sm:w-[calc(50%_-_0.75rem)]">
              <FormLabel>Budget</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Budget Saya" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1000000">Kurang dari 1 juta</SelectItem>
                  <SelectItem value="3000000">Kurang dari 3 juta</SelectItem>
                  <SelectItem value="5000000">Kurang dari 5 juta</SelectItem>
                  <SelectItem value="10000000">Kurang dari 10 juta</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem className="w-full sm:w-[calc(50%_-_0.75rem)]">
              <FormLabel>Jangka Waktu</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Tidak ada 'saya butuh besok'" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="7">7 hari</SelectItem>
                  <SelectItem value="30">30 hari</SelectItem>
                  <SelectItem value="60">60 hari</SelectItem>
                  <SelectItem value="90">90 hari</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full">
          <p className="subheading-small">
            *Kami sangat menjaga privasi Anda. Data kontak Anda hanya digunakan
            untuk proyek dan tidak akan dibagikan atau dijual kepada pihak lain.
            Jika Anda tidak memilih kami untuk proyek, data kontak Anda akan
            dihapus dari sistem kami.
          </p>
        </div>
        <Button
          className="w-full bg-yellow-400 text-gray-900 button-cta font-semibold rounded-full p-8"
          type="submit"
        >
          Hubungi Kami
          <ArrowRight className="w-6 h-6 ml-6" />
        </Button>
      </form>
    </Form>
  );
};
