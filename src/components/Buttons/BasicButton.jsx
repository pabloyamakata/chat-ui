function BasicButton({ btnDescription }) {
    return(
        <button type="button" className="focus:ring active:scale-90 flex justify-center items-center w-[52px] h-[52px] bg-blue-500 ring-blue-300 rounded-full transition-transform tap-highlight-none">
            <span className="text-2xl text-white material-icons">{ btnDescription }</span>
        </button>
    )
}

export default BasicButton;
