import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { LoginService } from '../../services/login.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [TableModule, ButtonModule, HttpClientModule, CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  users:any[] = [];
  errorMessage: string = '';
  constructor(private loginService: LoginService) {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loginService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: () => {
        this.errorMessage = "Error al cargar los usuarios."
      }
    });
  }

  // onEdit(user:any): void {
  //   this.router.navigate(['/myupdate/edit', user.userId]);
  // }

}
