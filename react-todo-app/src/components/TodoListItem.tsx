import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"

export const TodoListItem = ({ todo, onTodoRemove }) => {
    const { id, text, checked } = todo;

    // TodoList 컴포넌트에서 받은 id를 가진 todo를 삭제
    const handleTodoRemove = () => {
        onTodoRemove(id);
    }

    return (
        <div className="flex justify-between items-center">
            <Checkbox id={id} onClick={handleTodoRemove} checked={checked}/>
            <div className="flex justify-start items-center flex-grow px-2">
                <div className="text">{text}</div>
            </div>
            <Popover>
                <PopoverTrigger asChild>
                <Button variant="flat" className="text-gray-400">
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="flex flex-col space-y-2">
                        <Button variant="outline">Edit</Button>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">
                                    <span className="text-red-500">
                                    Delete
                                    </span>
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Are you sure deleting this?</DialogTitle>
                                    <DialogDescription>
                                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                        <Button variant="destructive" onClick={handleTodoRemove}>Continue</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
