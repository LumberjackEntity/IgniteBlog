"use client";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { CircleX, SearchIcon } from "lucide-react";
import { type ReactElement, useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Field, FieldError } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";

const formSchema = z.object({
  search: z.string().min(3, "Use pelo menos 3 caracteres."),
});

export const SearchForm = (): ReactElement => {
  const { control, handleSubmit, resetField, watch } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: standardSchemaResolver(formSchema),
    defaultValues: {
      search: "",
    },
    mode: "onChange",
  });
  const searchFieldValue = watch("search");
  const isSearchInputEmpty: boolean =
    searchFieldValue === "" ||
    searchFieldValue === undefined ||
    searchFieldValue === null;

  const handleClick = useCallback(() => {
    resetField("search");
  }, [resetField]);

  function onSubmit(data: z.infer<typeof formSchema>): void {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="search"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <InputGroup className="rounded-lg border-gray-400 has-[>[data-filled=true]]:border-blue-300 dark:bg-transparent">
              <InputGroupInput
                {...field}
                aria-invalid={fieldState.invalid}
                autoComplete="off"
                placeholder="Buscar"
                className="peer text-gray-100 text-sm placeholder:text-gray-300 group-focus-within/input-group:placeholder:text-transparent"
                data-filled={!isSearchInputEmpty}
              />
              <InputGroupAddon
                align="inline-start"
                className="text-gray-300 transition-colors group-focus-within/input-group:text-blue-200 peer-[[data-[filled=true]][aria-invalid=false]]:text-blue-200 peer-aria-invalid:text-destructive"
              >
                <SearchIcon className="h-4 w-4" />
              </InputGroupAddon>
              {!isSearchInputEmpty && !fieldState.invalid && (
                <InputGroupAddon align="inline-end">
                  <Button type="button" variant="ghost" onClick={handleClick}>
                    <CircleX className="h-4 w-4 text-white" />
                  </Button>
                </InputGroupAddon>
              )}
            </InputGroup>
            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </form>
  );
};
