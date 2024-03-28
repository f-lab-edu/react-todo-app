import { Plus } from "lucide-react"
import { Button } from "./ui/button"

export const PlusButton = () => {
    return (
        <Button variant="outline" size="icon" className="rounded-full absolute right-0 bottom-0 m-4 bg-black text-white">
            <Plus className="h-4 w-4" />
        </Button>
    )
}