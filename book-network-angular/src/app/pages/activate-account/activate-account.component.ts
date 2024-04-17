import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/services';
import { CodeInputModule } from 'angular-code-input';

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [CodeInputModule],
  providers: [AuthenticationService],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss',
})
export class ActivateAccountComponent {
  message: string = '';
  isOkay: boolean = true;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  onCodeCompleted(token: string): void {
    this.confirmaAccount(token);
  }
  confirmaAccount(token: string): void {
    this.authenticationService
      .confirm({
        token,
      })
      .subscribe({
        next: () => {
          this.message =
            'Your has been successfully activated. \nNow you can proceed to login.';
          this.submitted = true;
          this.isOkay = true;
        },
        error: (): void => {
          this.message = 'Token has been epired or invalid';
          this.submitted = true;
          this.isOkay = false;
        },
      });
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }
}
