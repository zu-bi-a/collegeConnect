from pyexpat import model
from xmlrpc.client import FastParser
from django.db import models
import uuid
from django.utils import timezone


# Create your models here.


# ========USER MODEL=========
class UserModel(models.Model):
    userId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=50, unique=True)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    password = models.CharField(max_length=250)   
    phone = models.BigIntegerField(blank=False, null=False, unique=True)
    email = models.EmailField(blank=False, unique=True)
    userImg = models.ImageField(upload_to='accounts/images', null=True, blank=True)

    def __str__(self):
        return self.email

class DocData(models.Model):
    docDataId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    parentUser = models.ForeignKey('UserModel', related_name='category', on_delete=models.CASCADE)
    collegeName = models.CharField(max_length=50)
    courseName = models.CharField(max_length=50)
    testDate = models.DateField()
    admitCardReleaseDate = models.DateField()
    testCity = models.CharField(max_length=50)
    admitCard = models.FileField(upload_to='pdf')
    syllabus = models.ImageField(upload_to='accounts/images', null=True, blank=True)

    # is this test done what about the result

    def __str__(self):
        return self.collegeName + '/' + self.courseName