import { Plus } from "lucide-react"
import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"
import { useState } from 'react';

export const PlusButton = ({onTodoAdd}) => {
    const [input, setInput] = useState("")

    // State 끌어올리기
    const handleTodoAdd = () => {
        onTodoAdd(input);
        setInput('')
    }

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full absolute right-0 bottom-0 m-4 bg-black text-white">
                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Todo</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col space-y-4">
                    <input type="text" value={input} onChange={handleInputChange} placeholder="Type your todo here" className="border border-gray-300 rounded-md p-2" />
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" onClick={handleTodoAdd}>Create</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}