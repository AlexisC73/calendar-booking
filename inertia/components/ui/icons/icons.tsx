import { HomeIcon } from '~/components/assets/icons'
import { exhaustiveGuard } from '~/helpers/exhaustive_guard'

const iconsName = ['home'] as const

export interface IconProps {
  name: (typeof iconsName)[number]
  size: 'sm' | 'md' | 'lg' | 'xl'
}

export function Icons({ name, size }: IconProps) {
  function Icon() {
    switch (name) {
      case 'home':
        return <HomeIcon />
      default:
        return exhaustiveGuard(name)
    }
  }

  const customClass: { [key in IconProps['size']]: string } = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  }

  return (
    <span className={`flex items-center justify-center ${customClass[size]}`}>
      <Icon />
    </span>
  )
}
