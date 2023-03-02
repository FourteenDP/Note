namespace Singleton
{
  // 饿汉式
  public sealed class Singleton1
  {
    private Singleton1() { }
    private static Singleton1 _instance = new Singleton1();
    public static Singleton1 Instance
    {
      get
      {
        return _instance;
      }
    }
  }

  // 懒汉式
  public class Singleton2
  {
    private static Singleton2 instance = null;
    private Singleton2() { }
    public static Singleton2 Instance
    {
      get
      {
        if (instance == null)
        {
          instance = new Singleton2();
        }
        return instance;
      }
    }
  }

  // 双重检查锁定
  public class Singleton3
  {
    private static Singleton3 instance = null;
    private static readonly object padlock = new object();
    Singleton3() { }
    public static Singleton3 Instance
    {
      get
      {
        if (instance == null)
        {
          lock (padlock)
          {
            if (instance == null)
            {
              instance = new Singleton3();
            }
          }
        }
        return instance;
      }
    }
  }


  // 测试
  public class Test
  {
    public static void Run()
    {
      Singleton1 s1 = Singleton1.Instance;
      Singleton1 sl1 = Singleton1.Instance;
      Singleton2 s2 = Singleton2.Instance;
      Singleton2 sl2 = Singleton2.Instance;
      Singleton3 s3 = Singleton3.Instance;
      Singleton3 sl3 = Singleton3.Instance;

      System.Console.WriteLine(s1 == sl1);
      System.Console.WriteLine(s2 == sl2);
      System.Console.WriteLine(s3 == sl3);
    }
  }
}
