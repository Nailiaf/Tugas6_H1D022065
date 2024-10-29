import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  photoURL: string; // Menyimpan URL foto
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.photoURL = 'assets/img/far.jpg'; // Ganti dengan nama file foto Anda
    this.folder = '';
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
