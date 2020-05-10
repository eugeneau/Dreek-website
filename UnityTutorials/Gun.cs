using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Gun : MonoBehaviour
{
    public Animator animator;
    public float damage = 10f;
    public float range = 100f;
    public bool isFullAuto;
    public float FireRate;
    public AudioSource ReloadAudio;
    public Transform BulletEjectLocation;
    public GameObject ShellPrefab;

    public int maxAmmo = 10;
    private int currentAmmo;
    public float ReloadTime = 2f;
    private bool isReloading = false;

    public Camera fpsCam;
    public GameObject bulletPrefab;
    public Transform firePoint;
    public AudioSource ShootSFX;
    public ParticleSystem muzzleFlash;
    private float NextTimeToFire = 0f;

    void Start()
    {
        currentAmmo = maxAmmo;
    }
    void OnEnable()
    {
        isReloading = false;
    }
    void Update()
    {
        if (isFullAuto == true)
        {
            if (Input.GetButton("Fire1") && Time.time >= NextTimeToFire)
            {
                NextTimeToFire = Time.time + 1f / FireRate;
                Shoot();
            }
        }
        if (isReloading)
            return;
        if (currentAmmo <= 0)
        {
            StartCoroutine(Reload());
            return;
        }
        if (Input.GetButtonDown("Fire1"))
        {
            Shoot();
        }
    }
    void Shoot ()
    {
        currentAmmo--;

        muzzleFlash.Play();
        ShootSFX.Play();
        Instantiate(bulletPrefab, firePoint.position, firePoint.rotation);
        Instantiate(ShellPrefab, BulletEjectLocation.position, BulletEjectLocation.rotation);
    }
    IEnumerator Reload ()
    {
        ReloadAudio.Play();

        isReloading = true;

        yield return new WaitForSeconds(ReloadTime);

        currentAmmo = maxAmmo;
        isReloading = false;
    }
}
