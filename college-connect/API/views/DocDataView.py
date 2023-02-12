from rest_framework import generics
from API.models import DocData
from API.serializers import DocDataSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from drf_yasg.utils import swagger_auto_schema 
from drf_yasg import openapi
from django.contrib.auth.hashers import make_password
from rest_framework import mixins
from rest_framework.parsers import JSONParser
from django.http import JsonResponse


# This Helps To Develop CRUD APIs Of UserModel (All at one set)


# ====== Doc Views Starts ========
@api_view(['GET'])
def GetAllDocsView(request):
    AllDocs = DocData.objects.all()
    serializer_class = DocDataSerializer(AllDocs, many=True)
    return Response({"data":serializer_class.data}, status=status.HTTP_200_OK)


@api_view(['GET'])
def GetDocByIDView(request):
    # Getting docDataId in uuid (Queru Param ?docDataId=)
    docDataId = request.query_params.get('docData_id')
    # If docDataId is not provided
    if docDataId is None:
        return Response({"data": "Docs Id Not Provided"}, status=status.HTTP_400_BAD_REQUEST)
    try:
        DocData = DocData.objects.get(docDataId=docDataId)
        serializer = DocDataSerializer(DocData, many=False)
        return Response({"data":serializer.data}, status=status.HTTP_200_OK)
    except Exception as err:
        print(err)
        return Response(str(err), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def CreateDocView(request):
    ReqData = request.data
    try:
        serializers = DocDataSerializer(data=ReqData)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data,status=status.HTTP_201_CREATED)
        return Response(serializers.errors,status=status.HTTP_400_BAD_REQUEST)
    except Exception as err:
        print(err)
        return Response(serializers.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['PATCH'])
def UpdateDocView(request):
    # Getting docDataId in uuid (Queru Param ?docDataId=)
    docDataId = request.query_params.get('docData_id')
    # If docDataId is not provided
    if docDataId is None:
        return Response({"data": "Docs Id Not Provided"}, status=status.HTTP_400_BAD_REQUEST)
    ReqData = request.data
    try:
        docmodel = DocData.objects.get(docDataId=docDataId)
        # serializers = UserSerializer(usrmodel, many=False)        
        # print(usrmodel)
        serializers = DocDataSerializer(instance=docmodel,data=ReqData, many=False)

        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        else:
            return Response(serializers.errors,status=status.HTTP_400_BAD_REQUEST)
    except Exception as err:
        print("Error ==>", err)
        return Response(str(err), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['DELETE'])
def DeleteDocView(request):
    # Getting docDataId in uuid (Queru Param ?docDataId=)
    docDataId = request.query_params.get('docData_id')
    # If docDataId is not provided
    if docDataId is None:
        return Response({"data": "Docs Id Not Provided"}, status=status.HTTP_400_BAD_REQUEST)
    try:
        docmodel = DocData.objects.get(docDataId=docDataId)
        docmodel.delete()
        return Response({"data": "User Model Deleted"}, status=status.HTTP_200_OK)
    except Exception as err:
        return Response({"msg": err.message}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
