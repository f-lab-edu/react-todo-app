import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const SearchGroup = ({onChangeInput}) => {
    const handleSearchChange = (e) => {
        onChangeInput(e);
    }

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Search" onChange={handleSearchChange}/>
            <Button type="submit">Search</Button>
        </div>
    )
}