export const TodoTemplate = ({ children }) => {
    return (
        <div className="w-[430px] h-[932px] m-auto relative border border-black">
            <div className="w-full h-full bg-white m-auto rounded-lg shadow-lg p-5">
                {children}
            </div>
        </div>
    )
}