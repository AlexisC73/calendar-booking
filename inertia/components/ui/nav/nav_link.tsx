interface NavLinkProps {
  size: 'sm' | 'md' | 'lg' | 'xl'
  label: string | null
  disabled?: boolean
}

export function NavLink({ label, size, disabled = false }: NavLinkProps) {
  const customClass: { [key in NavLinkProps['size']]: string } = {
    sm: 'p-1.5 gap-x-1.5 text-3 line-height-4',
    md: 'p-2 gap-x-1.5 text-3.5 line-height-5',
    lg: 'p-3 gap-x-2 text-4 line-height-6',
    xl: 'p-4 gap-x-3 text-4.5 line-height-7',
  }

  const colorClass = disabled
    ? 'text-slate-3'
    : 'text-slate-6 hover:bg-slate-1 active:text-indigo-7 active:bg-indigo-1'

  return (
    <span
      aria-disabled={disabled}
      className={`flex bg-opacity-0 rounded-1 bg-light ${colorClass} ${customClass[size]}`}
    >
      {label}
    </span>
  )
}