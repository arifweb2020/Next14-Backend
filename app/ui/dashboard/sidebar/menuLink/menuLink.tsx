"use client"

import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'
import { MenuItem } from './../sidebar';

interface MenuLinkProps {
  item: MenuItem;
  key: string;
}

const MenuLink:React.FC<MenuLinkProps> = ({item}) => {

  const pathname = usePathname()

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink