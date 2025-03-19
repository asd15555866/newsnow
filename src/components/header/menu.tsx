import { motion } from "framer-motion"

function ThemeToggle() {
  const { isDark, toggleDark } = useDark()
  return (
    <li onClick={toggleDark}>
      <span className={$("inline-block", isDark ? "i-ph-moon-stars-duotone" : "i-ph-sun-dim-duotone")} />
      <span>
        {isDark ? "浅色模式" : "深色模式"}
      </span>
    </li>
  )
}


