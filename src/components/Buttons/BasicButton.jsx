function BasicButton({ btnDescription }) {
    return(
        <button className="sm:w-[58px] sm:h-[58px] focus:ring active:scale-90 flex justify-center items-center w-[50px] h-[50px] bg-blue-500 ring-blue-300 rounded-full transition-transform">
            <span className="sm:text-3xl material-icons text-[26px] text-white">{ btnDescription }</span>
        </button>
    )
}

export default BasicButton;
