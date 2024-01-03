import { GrandService } from './../../../../../_models/grandService';
import { UploadService } from './../../../../../_services/upload.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import 'hammerjs';
import { NgxImageGalleryComponent, GALLERY_CONF, GALLERY_IMAGE } from 'ngx-image-gallery';
import { DEMO_GALLERY_CONF_INLINE } from './config';
import { FileType } from 'src/app/_helpers/file.helper';
import { UploadEvent, FileSystemFileEntry, FileSystemDirectoryEntry, UploadFile } from 'ngx-file-drop';
import { UIHelper } from 'src/app/_helpers/ui.helper';
import { Asset } from 'src/app/_models/asset';
import { ActivatedRoute } from '@angular/router';
import { GrandServicesService } from 'src/app/_services/grandServices.service';

@Component({
  selector: 'app-grand-service-images',
  templateUrl: './grand-service-images.component.html',
  styleUrls: ['./grand-service-images.component.less']
})
export class GrandServiceImagesComponent implements OnInit {
  formErrors: string[];
  public files: UploadFile[] = [];
  uploadedFiles: File[];
  assets: Asset[];
  images: GALLERY_IMAGE[];
  saveDisabled = true;
  grandService: GrandService;

  // get reference to gallery component
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  // gallery configuration
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
  };

  constructor(private uploadService: UploadService, private uiHelper: UIHelper, private route: ActivatedRoute,
              private grandServicesService: GrandServicesService) { }

  ngOnInit(): void {
    this.formErrors = [];
    this.conf = DEMO_GALLERY_CONF_INLINE;
    this.uploadedFiles = new Array<File>();
    this.images = [];
    this.assets = new Array<Asset>();
    this.files = [];
    this.saveDisabled = true;

    this.route.params.subscribe(params => {
      this.grandServicesService.get(params.name)
        .subscribe((data) => {
          this.grandService = data;

          this.uploadService.get(this.grandService.id, FileType.IMG).subscribe((assets) => {
            assets.forEach((asset) => {
              const newImg: GALLERY_IMAGE = {
                url: asset.url,
                altText: asset.name,
                title: asset.name,
                thumbnailUrl: asset.url,
              };

              this.assets.push(asset);
              this.images.push(newImg);
            });

            this.newImage();
          });
      });
   });
  }

  // open gallery
  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }

  /**************************************************/

  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    console.log('Gallery opened at index ', index);
  }

  // callback on gallery closed
  galleryClosed() {
    console.log('Gallery closed.');
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
    this.ngxImageGallery.open(index);
    console.log('Gallery image clicked with index ', index);
  }

  // callback on gallery image changed
  galleryImageChanged(index) {
    console.log('Gallery image changed to index ', index);
  }

  // callback on user clicked delete button
  deleteImage(index) {
    const imgId = this.assets[index].id;

    this.uploadService.delete(this.grandService.id, imgId).subscribe((blob) => {
      this.ngOnInit();
    }, error => {
      this.addErrors(error.error);
    });
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.uploadedFiles.push(file);
        });
       } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }

    this.saveDisabled = false;
  }

  save() {
    const formData = new FormData();
    this.uploadedFiles.forEach((file, i) => {
      formData.append('file-' + i.toString(), file, file.name);
      formData.append('name-' + i.toString(), file.name);
      formData.append('grandServiceId-' + i.toString(), this.grandService.id.toString());
      formData.append('typeName-' + i.toString(), FileType.IMG);
    });

    if (this.uploadedFiles.length === 0) {
      location.reload();
    } else {
      this.uploadService.upload(formData).subscribe(() => {
        this.ngOnInit();
      }, error => {
        this.addErrors(error.error);
      });
    }
  }

  addErrors(errors: { [s: string]: {}; } | ArrayLike<{}>): void {
    this.formErrors = [];
    Object.entries(errors).forEach(
      ([key, value]) => this.formErrors.push(key + ': ' + value));

    this.uiHelper.scrollToTop();
  }
}
