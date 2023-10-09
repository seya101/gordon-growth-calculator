import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})
export class DarkModeToggleComponent implements OnInit {
  darkMode = false;

  constructor() { }

  ngOnInit(): void {
    this.setDarkModeFromLocalStorage();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.setDarkModeToLocalStorage();
    this.applyDarkMode();
  }

  setDarkModeFromLocalStorage() {
    const storedDarkMode = localStorage.getItem('darkMode');
    this.darkMode = storedDarkMode === 'true';
    this.applyDarkMode();
  }

  setDarkModeToLocalStorage() {
    localStorage.setItem('darkMode', this.darkMode.toString());
  }

  applyDarkMode() {
    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
