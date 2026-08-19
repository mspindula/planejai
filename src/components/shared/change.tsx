export function Change(event: React.MouseEvent<HTMLButtonElement>) {
  const element = event.currentTarget

  const isPrimary = element.classList.contains('primary')

  element.classList.add('scale-95', 'opacity-50')

  setTimeout(() => {
    if (isPrimary) {
      element.classList.remove('primary')
      element.classList.add('ghost')
    } else {
      element.classList.remove('ghost')
      element.classList.add('primary')
    }

    element.classList.remove('scale-95', 'opacity-50')
  }, 150)
}
