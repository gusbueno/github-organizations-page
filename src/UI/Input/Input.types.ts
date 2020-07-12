export interface InputProps {
  value: string | number,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  type?: string
}

export type Props = InputProps & React.InputHTMLAttributes<HTMLInputElement>
