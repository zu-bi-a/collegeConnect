from django.urls import path
from API.views.UserView import *
from API.views.DocDataView import *

app_name = 'API'

urlpatterns = [
    
    # ======== Users Enpoints =======
    path("get-all-users", GetAllUsersView, name="GetAllUsers"),
    path("get-user-by-id", GetUserByIDView, name="GetUserByID"),
    path("create-user", CreateUserView, name="CreateUser"),
    path("update-user", UpdateUserView, name="UpdateUser"),
    path("delete-user", DeleteUserView, name="DeleteUser"),

    # ======= Docs Endpoints =========
    path("get-all-docs", GetAllDocsView, name="GetAllDocs"),
    path("get-docs-by-id", GetDocByIDView, name="GetDocsByID"),
    path("create-docs", CreateDocView, name="CreateDocs"),
    path("update-docs", UpdateDocView, name="UpdateDocs"),
    path("delete-docs", DeleteDocView, name="DeleteDocs"),


]