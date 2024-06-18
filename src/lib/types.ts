// Fichiers pour les types du TypeScript

export type ChildrenType = {
    children: React.ReactNode;
}

export type CTAType = {
    children: React.ReactNode,
    onClick : (event: React.MouseEvent<HTMLButtonElement>) => void,
}



export interface InputProps {
    type: 'text' | 'number' | 'email' | 'password'
    label: string
    value: string | number
    name: string
    placeholder: string
    error?: boolean
    required: boolean
    disabled?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }