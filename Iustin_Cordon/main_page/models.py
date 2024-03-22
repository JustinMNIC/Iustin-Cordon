from django.db import models

# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    link_to_github = models.URLField(blank=True)
    link_see_in_action = models.URLField(blank=True)
    tags = models.ManyToManyField('Tag')
    
    def __str__(self):
        return self.name
    
    def get_description(self):
        return self.description
    
    def get_link_to_github(self):
        return self.link_to_github
    
    def get_link_see_in_action(self):
        return self.link_see_in_action
    
    def get_tags(self):
        return ''.join([tag.name.lower() for tag in self.tags.all()])
    
class Tag(models.Model):
    name = models.CharField(max_length=50, unique = True)
    
    def __str__(self):
        return self.name