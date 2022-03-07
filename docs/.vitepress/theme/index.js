import DefaultTheme from 'vitepress/theme'

const modules = import.meta.glob('../../components/*.vue')

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    for (const path in modules) {
      modules[path]().then((mod) => {
        const filename = path.split('/').pop()
        const [name] = filename.split('.')
        app.component(name, mod.default)
      })
    }
  }
}
