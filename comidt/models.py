from ckeditor.fields import RichTextField
from django.db import models


class HomeSlider(models.Model):
    title = models.CharField(max_length=60)
    file = models.ImageField(default='/placeholder-home-slide.png')
    description = RichTextField()

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        rows = HomeSlider.objects.all().count()
        print(rows)
        if rows <= 2:
            super(HomeSlider, self).save(*args, **kwargs)


class HomeAboutTab(models.Model):
    title = models.CharField(max_length=60)
    description = RichTextField()
    link = models.CharField(max_length=60)

    def __str__(self):
        return self.title


class HomeAboutTile(models.Model):
    title = models.CharField(max_length=60)
    file = models.ImageField(default='/placeholder-home-tile.png')
    description = models.CharField(max_length=60)

    def __str__(self):
        return self.title


class HomeAboutCustomer(models.Model):
    title = models.CharField(max_length=60)
    file = models.ImageField(default='/placeholder-home-tile.png')

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        rows = HomeAboutCustomer.objects.all().count()
        print(rows)
        if rows <= 4:
            super(HomeAboutCustomer, self).save(*args, **kwargs)


class ServicesSocialNetwork(models.Model):
    title = models.CharField(max_length=60)
    file = models.ImageField(default='/social-network-placeholder.png')
    link = models.CharField(max_length=60)

    def __str__(self):
        return self.title


class ServicesProjectMap(models.Model):
    file = models.FileField()
    title = models.CharField(max_length=60)

    def __str__(self):
        return self.title


class ServicesProjectPerspective(models.Model):
    file = models.FileField()
    title = models.CharField(max_length=60)

    def __str__(self):
        return self.title


class ServicesProjectExecutionSteps(models.Model):
    file = models.FileField()
    title = models.CharField(max_length=60)

    def __str__(self):
        return self.title


class ServicesDepartment(models.Model):
    title = models.CharField(max_length=60)
    description = RichTextField()
    responsible_fullname = models.CharField(max_length=60)
    responsible_image = models.ImageField(default='/responsible-image-placeholder.png')
    department_image = models.ImageField(default='/department-image-placeholder.png')
    responsible_resume_eduction_degree = models.CharField(max_length=60, default=" ")
    responsible_resume_eduction_field = models.CharField(max_length=60, default=" ")
    responsible_resume_eduction_university = models.CharField(max_length=60, default=" ")
    responsible_resume_eduction_date = models.CharField(max_length=60, default=" ")
    responsible_resume_experience = RichTextField()
    social_network = models.ManyToManyField(ServicesSocialNetwork)

    # project = models.ManyToManyField(ServicesProject)

    def __str__(self):
        return self.title


class ServicesProject(models.Model):
    title = models.CharField(max_length=60)
    place = models.CharField(max_length=60)
    employer = models.CharField(max_length=60)
    consultant = models.CharField(max_length=60)
    duration = models.CharField(max_length=60)
    ahjam = models.CharField(max_length=60)
    start_time = models.DateField()
    image_big = models.ImageField()
    image_small = models.ImageField()
    image_page = models.ImageField()
    map = models.ManyToManyField(ServicesProjectMap)
    perspective = models.ManyToManyField(ServicesProjectPerspective)
    execution_step = models.ManyToManyField(ServicesProjectExecutionSteps)
    description = RichTextField()
    department = models.ForeignKey(ServicesDepartment, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
