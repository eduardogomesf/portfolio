'use client'

import { GithubLogo, LinkedinLogo, StackOverflowLogo } from 'phosphor-react'

type ExternalLinkButtonProps = {
  text: 'Linkedin' | 'Github' | 'Stackoverflow'
  link: string
}

export function ExternalLinkButton({ text, link }: ExternalLinkButtonProps) {

  const backgroundColor = {
    "Linkedin": "bg-[#0077B5]",
    "Github": "bg-[#333333]",
    "Stackoverflow": "bg-[#F48024]"
  }

  const icon = {
    "Linkedin": <LinkedinLogo size={24} weight="fill" color="#FFFFFF" />,
    "Github": <GithubLogo size={24} weight="fill" color="#FFFFFF" />,
    "Stackoverflow": <StackOverflowLogo size={24} weight="fill" color="#FFFFFF" />
  }

  return (
    <a
      href={link}
      target="_blank" rel="noopener noreferrer"
      className={`py-2 w-[25rem] rounded text-lg flex items-center justify-center gap-2 ${backgroundColor[text]}`}
    >
      {icon[text]}
      {text}
    </a>
  )
}