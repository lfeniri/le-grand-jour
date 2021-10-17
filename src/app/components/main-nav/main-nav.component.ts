import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Rights } from 'src/app/models/rights.enum';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private authService:AuthService) {}
    
  ngOnInit() {
  }


  isAuth(){
    return this.authService.isAuth();
  }
  haveAdminRight(){
    return this.authService.haveRight(Rights.ADMIN);
  }
  haveCustomerRight(){
    return this.authService.haveRight(Rights.CUSTOMER);
  }
  
  getUserName(){
    return this.authService.getUserName();
  }
 
  logout(){
    this.authService.logout();
  }

}
