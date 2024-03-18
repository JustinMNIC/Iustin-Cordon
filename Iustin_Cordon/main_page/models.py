from django.db import models

# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    link_to_github = models.URLField(blank=True)
    link_see_in_action = models.URLField(blank=True)
    image_of_video = models.FileField(upload_to='media/', blank=True)
    tags = models.ManyToManyField('Tag')
    
    def __str__(self):
        return self.name
    
class Tag(models.Model):
    name = models.CharField(max_length=50, unique = True)
    projects = models.ManyToManyField(Project, blank=True)
    
    def __str__(self):
        return self.name