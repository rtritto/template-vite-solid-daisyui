import type { Component } from 'solid-js'

import styles from './App.module.css'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>

        <div tabindex={0} class="collapse collapse-close collapse-arrow">
          <div class="collapse-title">
            Collapse title
          </div>

          <div class="collapse-content">
            Collapse content
          </div>
        </div>
      </header>
    </div>
  )
}

export default App