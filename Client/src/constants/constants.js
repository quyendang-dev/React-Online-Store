const auth = {
  authToken: "authToken",
  authUser: "authUser"
};

const baseUrl = "http://localhost:5000";
const authUrl = `${baseUrl}/auth`;
const bookUrl = `${baseUrl}/book`;
const ordersUrl = `${baseUrl}/orders`;
const usersUrl = `${baseUrl}/users`;
const statsUrl = `${baseUrl}/stats`;

const dbConstants = {
  // auth
  loginUrl: `${authUrl}/login`,
  logoutUrl: `${authUrl}/logout`,
  registerUrl: `${authUrl}/signup`,
  // books
  bookCreateUrl: `${bookUrl}/create`,
  bookEditByIdUrl: `${bookUrl}/edit/`,
  bookDeleteByIdUrl: `${bookUrl}/delete/`,
  bookLikeByIdUrl: `${bookUrl}/like/`,
  bookUnlikeByIdUrl: `${bookUrl}/unlike/`,
  bookReviewByIdUrl: `${bookUrl}/review/`,
  bookReviewDeleteByIdIndexUrl: `${bookUrl}/review/delete/`, // :bookId/:reviewIndex
  bookFileUploadByIdUrl: `${bookUrl}/upload/`,
  bookFileDeleteByIdUrl: `${bookUrl}/upload/delete/`,
  bookFileDownloadByIdUrl: `${bookUrl}/download/`,
  booksAllUrl: `${bookUrl}/all`,
  // orders
  orderCreateUrl: `${ordersUrl}/submit`,
  orderApproveByIdUrl: `${ordersUrl}/approve/`,
  orderCancelByIdUrl: `${ordersUrl}/cancel/`,
  orderDeliverByIdUrl: `${ordersUrl}/deliver/`,
  ordersByUserUrl: `${ordersUrl}/user`,
  ordersAllUrl: `${ordersUrl}/all`,
  ordersApprovedUrl: `${ordersUrl}/approved`,
  ordersCancelledUrl: `${ordersUrl}/cancelled`,
  ordersDeliveredUrl: `${ordersUrl}/delivered`,
  ordersPendingUrl: `${ordersUrl}/pending`,
  // user
  userProfileUrl: `${usersUrl}/profile`,
  // stats
  statsUrl: `${statsUrl}/`
};

// Input notifications
const notifications = {
  welcomeMsg: "Welcome to our online store",
  goToHome: "Go to home",
  goToStore: "Go to store",
  viewOrders: "View your orders",
  notFound: "Page not found",
  credentialsRequired: "Please provide credentials",
  emailRequired: "Please provide your email address",
  passwordRequired: "Please provide your password",
  passwordsDoNotMatch: "Passwords do not match",
  usernameRequired: "Please provide your username",
  bookTitleRequired: "Please provide book title",
  bookAuthorRequired: "Please provide book author",
  bookGenresRequired: "Please provide book genres",
  bookImageRequired: "Please provide book image URL",
  bookPriceRequired: "Please provide valid book price",
  bookDescriptionRequired: "Please provide book description",
  bookDataRequired: "Please provide book data"
};

const notificationMessages = {
  // Auth
  loginRequiredMsg: "Please login to continue",
  logoutSuccessMsg: "You have successfully logged out",
  // Books
  bookCreatedMsg: "Book created",
  bookDeletedMsg: "Book deleted",
  bookEditedMsg: "Book updated",
  bookLikeddMsg: "Book liked",
  bookUnlikeddMsg: "Book unliked",
  bookAddedToCartMsg: "Book added to cart",
  bookRemovedFromCartMsg: "Book removed from cart",
  bookInfoUpdatedMsg: "Book info & price updated",
  bookQuantityUpdatedMsg: "Book quantity updated",
  bookFileNotFoundMsg: "Book file not found",
  bookNotFoundMsg: "Book not found",
  // Cart
  cartEmptyMsg: "Cart is empty",
  cartUpdatedMsg: "Cart updated",
  // Orders
  orderCreateMsg: "Order created",
  orderApprovedMsg: "Order approved",
  orderNotFoundMsg: "Order not found",
  // Reviews
  reviewCreatedMsg: "Review added",
  // Invalid
  invalidInput: "Invalid input",
  notFoundMsg: "Not found",
  errorMsg: "Something went wrong. Please try again",
  // Loading
  loadingMsg: "Loading..."
};

const paths = {
  // auth
  registerPath: "/signup",
  registerName: "Register",
  loginPath: "/login",
  loginName: "Login",
  logoutPath: "/logout",
  logoutName: "Logout",
  // home
  indexPath: "/",
  indexName: "Online store",
  homePath: "/home",
  homeName: "Home",
  // books
  bookDetailsPath: "/books/details",
  bookDetailsName: "Details",
  storePath: "/store",
  storeName: "Store",
  storeGoToName: "Go to store",
  // cart
  cartPath: "/cart",
  cartName: "Cart",
  // orders
  myOrdersPath: "/orders",
  myOrdersName: "My orders",
  orderDetailsPath: "/orders/details",
  orderDetailsName: "View",
  // admin
  bookCreatePath: "/admin/create",
  bookCreateName: "Create",
  bookEditPath: "/admin/edit",
  bookEditName: "Edit book",
  bookDeletePath: "/admin/delete",
  bookDeleteName: "Delete book",
  orderDetailsAdminPath: "/admin/orders/details",
  ordersAdminPath: "/admin/orders",
  ordersAdminName: "Admin orders",
  ordersApprovedName: "Approved orders",
  ordersCancelledName: "Cancelled orders",
  ordersDeliveredName: "Delivered orders",
  ordersPendingName: "Pending orders",
  // user
  profilePath: "/profile",
  profileName: "Profile",
  profileEditPath: "/profile/edit",
  profileDeletePath: "/profile/delete"
};

const roles = {
  adminRole: "Admin"
};

const actions = {
  create: "create",
  edit: "edit",
  delete: "delete",
  login: "login",
  register: "register"
};

export {
  actions,
  auth,
  dbConstants,
  notifications,
  notificationMessages,
  paths,
  roles
};
