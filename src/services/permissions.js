
const noPermissionMessage = 'You don\'t have the permissions to perform this action.';
const isAdmin = (req) => req.user.isAdmin;

export { isAdmin, noPermissionMessage };
