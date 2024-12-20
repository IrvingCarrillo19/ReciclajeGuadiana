import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BaseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  //USUARIOS
  getUsuarios(): Observable<any>{
    return this.http.get(`${this.BaseUrl}/usuarios`);
  }
  addUsuarios(usuario: any): Observable<any> {
    return this.http.post(`${this.BaseUrl}/add_usuario`, usuario);
  }
  updateUsuario(id_usuario: number, usuario: any): Observable<any> {
    return this.http.put(`${this.BaseUrl}/update_usuario/${id_usuario}`, usuario);
  }

  deleteUsuario(id_usuario: number): Observable<any> {
    return this.http.delete(`${this.BaseUrl}/delete_usuario/${id_usuario}`);
  }

  //MATERIAL
  getMaterial(): Observable<any> {
    return this.http.get(`${this.BaseUrl}/material`);
  }

  addMaterial(material: any): Observable<any> {
    return this.http.post(`${this.BaseUrl}/add_material`, material);
  }

  updateMaterial(id_material: number, material: any): Observable<any> {
    return this.http.put(`${this.BaseUrl}/update_material/${id_material}`, material);
  }

  deleteMaterial(id_material: number): Observable<any> {
    return this.http.delete(`${this.BaseUrl}/delete_material/${id_material}`);
  }
  //ENTREGA
  getEntrega(): Observable<any> {
    return this.http.get(`${this.BaseUrl}/entrega`);
  }

  addEntrega(entrega: any): Observable<any> {
    return this.http.post(`${this.BaseUrl}/add_entrega`, entrega);
  }

  updateEntrega(id_entrega: number, entrega: any): Observable<any> {
    return this.http.put(`${this.BaseUrl}/update_entrega/${id_entrega}`, entrega);
  }

  deleteEntrega(id_entrega: number): Observable<any> {
    return this.http.delete(`${this.BaseUrl}/delete_entrega/${id_entrega}`);
  }

  //PROVEDOR
  getProveedores(): Observable<any> {
    return this.http.get(`${this.BaseUrl}/provedor`);
  }

  addProveedor(proveedor: any): Observable<any> {
    return this.http.post(`${this.BaseUrl}/add_provedor`, proveedor);
  }

  updateProveedor(id_proveedor: number, proveedor: any): Observable<any> {
    return this.http.put(`${this.BaseUrl}/update_provedor/${id_proveedor}`, proveedor);
  }

  deleteProveedor(id_proveedor: number): Observable<any> {
    return this.http.delete(`${this.BaseUrl}/delete_provedor/${id_proveedor}`);
  }

  // ===================== Reporte =====================
  getReportes(): Observable<any> {
    return this.http.get(`${this.BaseUrl}/reporte`);
  }

  addReporte(reporte: any): Observable<any> {
    return this.http.post(`${this.BaseUrl}/add_reporte`, reporte);
  }

  deleteReporte(id_reporte: number): Observable<any> {
    return this.http.delete(`${this.BaseUrl}/delete_reporte/${id_reporte}`);
  }

}
