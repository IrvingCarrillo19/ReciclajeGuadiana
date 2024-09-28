import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TablesComponent } from './tables/tables.component';
import path from 'path';
import { Component } from '@angular/core';
import { table } from 'console';

export const routes: Routes = [
    { path: 'dashboard', component: LayoutComponent , children: [{path: '', component: MainComponent}, 
        {path: 'tables', component: TablesComponent}]
    }
];

//dashboard/tables