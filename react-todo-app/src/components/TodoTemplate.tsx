export const TodoTemplate = ({ children }) => {
    return (
        <div className="w-[430px] h-[932px] m-auto relative">
            <div className="w-full h-full bg-white m-auto mt-20 rounded-lg shadow-lg p-5">
                {children}
            </div>
        </div>
    )
}