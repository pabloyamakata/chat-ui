function BasicButton({ btnDescription }) {
    return(
        <button type="button" className="sm:w-[58px] sm:h-[58px] focus:ring active:scale-90 flex justify-center items-center w-[50px] h-[50px] bg-blue-500 ring-blue-300 rounded-full transition-transform tap-highlight-none">
            <span className="sm:text-3xl text-[26px] text-white material-icons">{ btnDescription }</span>
        </button>
    )
}

export default BasicButton;
