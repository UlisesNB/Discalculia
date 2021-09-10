import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-resultados-detalles',
  templateUrl: './resultados-detalles.component.html',
  styleUrls: ['./resultados-detalles.component.scss']
})
export class ResultadosDetallesComponent implements OnInit {

  id: any;
  constructor(private activatedRoute: ActivatedRoute, private testService: TestService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('ID: ', this.id);
  }

  ngOnInit(): void {
    this.testService.getUserId(this.id).subscribe((data) => {
      console.log('Resultado del ID: ', this.id, 'es: ', data);
    });
  }

}
