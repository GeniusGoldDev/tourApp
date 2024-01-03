import { CloneType } from './../../../../../_helpers/clone.helper';
import { CloneService } from './../../../../../_services/clone.service';
import { GrandService } from './../../../../../_models/grandService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GrandServicesService } from 'src/app/_services/grandServices.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UIHelper } from 'src/app/_helpers/ui.helper';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { UploadService } from 'src/app/_services/upload.service';
import { FileType } from 'src/app/_helpers/file.helper';
import { Asset } from 'src/app/_models/asset';

@Component({
  selector: 'app-grand-service',
  templateUrl: './grand-service.component.html',
  styleUrls: ['./grand-service.component.less']
})
export class GrandServiceComponent implements OnInit {
  editorConfig: AngularEditorConfig;
  filesFromServer: Asset[];
  form: FormGroup;
  formErrors: string[];
  grandService: GrandService;
  itineraryFile: File = null;

  constructor(private grandServicesService: GrandServicesService, private formBuilder: FormBuilder,
              private uiHelper: UIHelper, private uploadService: UploadService,
              private cloneService: CloneService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.filesFromServer = new Array<Asset>();
    this.formErrors = [];
    this.editorConfig = this.uiHelper.getEditorConfig();

    this.route.params.subscribe(params => {
      const grandServiceName = params.name;

      if (grandServiceName == '0') {
        this.grandService = new GrandService();
        this.form = this.createFormGroup();
      } else {
        this.grandServicesService.get(params.name)
          .subscribe((data) => {
            this.grandService = data;
            this.uploadService.get(this.grandService.id, FileType.ITINERARY).subscribe((blob) => {
              blob.forEach((file) => {
                this.filesFromServer.push(file);
              });
            });

            this.form = this.createFormGroup();
        });
      }
   });
  }

  save() {
    const newGrandService: GrandService = this.form.value.grandService as GrandService;

    this.grandServicesService.save(newGrandService)
      .subscribe((savedGrandServiceData) => {
        this.grandService = savedGrandServiceData;

        if (this.itineraryFile === null) {
          location.reload();
          return;
        }
        const formData = new FormData();
        formData.append('file-1', this.itineraryFile, this.itineraryFile.name);
        formData.append('name-1', 'Itinerary');
        formData.append('grandServiceId-1', this.grandService.id.toString());
        formData.append('typeName-1', FileType.ITINERARY);

        this.uploadService.upload(formData).subscribe((assets) => {
          location.reload();
        }, error => {
          this.addErrors(error.error);
        });
    }, error => {
      this.addErrors(error.error);
    });
  }

  addErrors(errors: { [s: string]: {}; } | ArrayLike<{}>): void {
    this.formErrors = [];
    Object.entries(errors).forEach(
      ([key, value]) => this.formErrors.push(key + ': ' + value));

    this.uiHelper.scrollToTop();
  }

  createFormGroup() {
    return this.formBuilder.group({
      grandService: this.formBuilder.group(this.grandService)
    });
  }

  public onFileChange(files: FileList) {
    this.itineraryFile = files.item(0);
    this.form.markAsDirty();
  }

  removeFile(fileId: number, wrapperId: string) {
    this.uploadService.delete(this.grandService.id, fileId).subscribe(() => {
      document.getElementById(wrapperId).remove();
    });
  }

  clone() {
    this.cloneService.get(this.grandService.id, CloneType.GRAND_SERVICE).subscribe((data) => {
      window.location.href = '/tours/' + data.name + '/Tour';
    });
  }
}
