export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 focus:ring-blue-500",
    secondary:
      "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 focus:ring-blue-500",
    outline:
      "bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const combinedClassName =
    `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
