function HeaderIcon({ Icon }) {
  return (
    <div
      className="flex items-center md:px-10 sm:h-14
     md:hover:bg-gray-50 md:active:border-b-2
      md:active:border-blue-500 group rounded-md"
    >
      <Icon className="text-gray-500 md:group-hover:text-blue-500" />
    </div>
  );
}

export default HeaderIcon;
