"use client";

import { useDebouncedCallback} from 'use-debounce'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";

const InputList = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term:string) => {
        const params = new URLSearchParams(searchParams)
        params.set("page", "1")
        if (term) {
            params.set("query", term)
        } else {
            params.delete("query")
        }
        replace(`${pathname}?${params.toString()}`)
    }, 300) 
  return (
    <Input
      type="search"
      placeholder="Search..."
      className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
};

export default InputList;
