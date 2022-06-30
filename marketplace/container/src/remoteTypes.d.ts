declare const ASSETS_URL: string;

declare module 'auth/mount' {
  function mount(container: HTMLElement | null, data: any);
  export const { mount };
}

declare module 'dashboard/mount' {
  function mount(container: HTMLElement | null);
  export const { mount };
}

declare module 'marketing/mount' {
  function mount(container: HTMLElement | null, data: any);
  export const { mount };
}

declare module 'productManagement/mount' {
  function mount(container: HTMLElement | null);
  export const { mount };
}
