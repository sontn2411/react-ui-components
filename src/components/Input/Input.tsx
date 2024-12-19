interface FloatingLabelInputProps {
  label: string
  name: string
  type?: string
}

export const FloatingLabelInput = ({
  label,
  name,
  type = 'text',
  ...rest
}: FloatingLabelInputProps) => {
  return (
    <div className='w-full max-w-sm min-w-[200px]'>
      <div className='relative'>
        <input
          type={type}
          {...rest}
          name={name}
          className='peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
        />
        <label className='absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90'>
          {label}
        </label>
      </div>
    </div>
  )
}
