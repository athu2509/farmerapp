import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const requiredRoles: string[] = route.data['roles'] ?? [];

  if (requiredRoles.length === 0) return true;

  const user = auth.getCurrentUser();
  if (!user) return router.createUrlTree(['/login']);

  const hasAccess = requiredRoles.some(r => user.roles.includes(r));
  if (hasAccess) return true;

  return router.createUrlTree(['/dashboard']);
};
